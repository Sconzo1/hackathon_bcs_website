<?php

require_once '../../src/Database/DBOperations.php';
require_once '../../src/MBFunctions.php';
require_once '../../src/RPC/JSON_RPC.php';
require_once '../../src/errors.php';
require_once '../../src/Check/regex.php';


class Methods {

    private DBOperations $db;
    private MBFunctions $mb;
    private JSON_RPC $rpc;

    public function __construct() {
        $this->db = new DBOperations();
        $this->mb = new MBFunctions();
        $this->rpc = new JSON_RPC();
    }

    private function error($error) {
        return $this->rpc->makeErrorResponse(__CLASS__, $error, debug_backtrace()[1]['function']);
    }

    public function addTicker($data) {
        $db = $this->db;
        $id_user = $data->id_user;
        $ticker = $data->ticker;
        $amount = $data->amount;

        return  $this->rpc->makeResultResponse($db->addTicker($id_user, $ticker, $amount));
    }

    public function removeTicker($data) {
        $db = $this->db;
        $id_user = $data->id_user;
        $ticker = $data->ticker;
        $amount = $data->amount;

        return  $this->rpc->makeResultResponse($db->removeTicker($id_user, $ticker, $amount));
    }

    public function getTicker($data) {
        $db = $this->db;
        $id_user = $data->id_user;

        return  $this->rpc->makeResultResponse($db->getTicker($id_user));
    }

    public function getMoney($data) {
        $db = $this->db;
        $id_user = $data->id_user;

        return  $this->rpc->makeResultResponse($db->getMoney($id_user));
    }

    public function isEmailValid($email): bool {
        return preg_match(PATTERN_EMAIL, $email);
    }

}
