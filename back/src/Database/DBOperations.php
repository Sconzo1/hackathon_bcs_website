<?php

require_once '../../src/ConfigLoader.php';
require_once '../../src/Log/LogWriter.php';
require_once '../../src/errors.php';


class DBOperations {

    private PDO $conn;
    private LogWriter $log;
    private ConfigLoader $config;

    public function __construct() {
        $this->config = new ConfigLoader;
        $this->log = new LogWriter();
        $this->conn = new PDO(
            "mysql:dbname=".$this->config->get('db.name')."; host=".$this->config->get('db.host'),
            $this->config->get('db.user'),
            $this->config->get('db.pass')
        );
        $this->conn->exec("SET NAMES 'utf-8'");
        $this->conn->exec("SET CHARACTER SET 'utf8'");
    }

    private function error($error): void {
        $this->log->logEntry(__CLASS__, debug_backtrace()[1]['function'], $error);
    }

    public function getHash($password) {
        return password_hash($password."621317", PASSWORD_BCRYPT, ['cost' => 14]);
    }

    public function verifyHash($password, $hash): bool {
        return password_verify($password, $hash);
    }

    public function generateToken($length) {
        $bytes = '';

        try {
            $bytes = random_bytes(ceil($length / 2));
        } catch(Exception $e) {
            $this->error(ERR_INTERNAL);
        }

        return substr(bin2hex($bytes), 0, $length);
    }

    public function addTicker($id_user, $ticker, $amount) {
        $sql = 'SELECT COUNT(*) FROM tickers WHERE id_user = :id_user AND ticker = :ticker';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id_user' => $id_user,
                ':ticker' => $ticker
            )
        );

        if ($query->fetchColumn() == 1) {
            $sql = 'UPDATE tickers SET amount = amount + :amount WHERE id_user = :id_user AND ticker = :ticker';

            $query = $this->conn->prepare($sql);
            $query->execute(
                array(
                    ':amount' => $amount,
                    ':id_user' => $id_user,
                    ':ticker' => $ticker
                )
            );

            return true;
        }
        $sql = 'INSERT INTO tickers SET id_user = :id_user, ticker = :ticker, amount = :amount';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':amount' => $amount,
                ':id_user' => $id_user,
                ':ticker' => $ticker
            )
        );

        return true;

    }

    public function removeTicker($id_user, $ticker, $amount) {
        $sql = 'SELECT COUNT(*) FROM tickers WHERE id_user = :id_user AND ticker = :ticker';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id_user' => $id_user,
                ':ticker' => $ticker
            )
        );

        if ($query->fetchColumn() == 1) {

            $sql = 'SELECT * FROM tickers WHERE id_user = :id_user AND ticker = :ticker';

            $query = $this->conn->prepare($sql);
            $query->execute(
                array(
                    ':id_user' => $id_user,
                    ':ticker' => $ticker
                )
            );

            $obj = $query->fetchObject();

            if ($obj->amount - $amount == 0) {
                $sql = 'DELETE FROM tickers WHERE id_user = :id_user AND ticker = :ticker';

                $query = $this->conn->prepare($sql);
                $query->execute(
                    array(
                        ':id_user' => $id_user,
                        ':ticker' => $ticker
                    )
                );

                return true;
            } elseif ($obj->amount > $amount) {
                $sql = 'UPDATE tickers SET amount = amount - :amount WHERE id_user = :id_user AND ticker = :ticker';

                $query = $this->conn->prepare($sql);
                $query->execute(
                    array(
                        ':amount' => $amount,
                        ':id_user' => $id_user,
                        ':ticker' => $ticker
                    )
                );

                return true;
            }

            return false;
        }

        return false;

    }

    public function getTicker($id_user) {
        $sql = 'SELECT ticker, amount FROM tickers WHERE id_user = :id_user';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id_user' => $id_user,
            )
        );

        $result = $query->fetchAll();

        return $result;
    }

    public function getMoney($id_user) {
        $sql = 'SELECT * FROM users WHERE id_user = :id_user';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id_user' => $id_user,
            )
        );

        $result = $query->fetchObject();

        return $result->money_start;
    }

}
