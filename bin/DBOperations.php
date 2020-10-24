<?php

class DBOperations {

    private $host = '127.0.0.1';
    private $user = 'mysql';
    private $db = 'school_book_db';
    private $pass = 'mysql';
    private $conn;

    public function __construct() {
        $this->conn = new PDO("mysql:dbname=".$this->db.";host=".$this->host, $this->user, $this->pass);
        $this->conn->exec("SET NAMES 'utf-8'");
        $this->conn->exec("SET CHARACTER SET 'utf8'");
    }


    // Проверка на уже существующего пользователя

    public function checkUserExist($email) {
        $sql = 'SELECT COUNT(*) from users WHERE email =:email';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':email' => $email
            )
        );

        if ($query) {
            $row_count = $query->fetchColumn();

            return !($row_count == 0);
        }

        return false;
    }


    // Регистрация

    public function register($user) {
        // Определение типа пользователя (1 - Ученик // 2 - Учитель // 3 - Родитель)

        $name = trim($user->name);
        $surname = trim($user->surname);
        $email = strtolower(trim($user->email));
        $encrypted_password = trim($this->getHash($user->password));

        // Генерация уникальных id и кода восстановления

        $un_id = uniqid('', true);

        while (!$this->verifyUniquenessUn_id($un_id)) {
            $un_id = uniqid('', true);
        }

        // Создание записи о новом пользователе

        $sql = 'INSERT INTO users SET un_id = :un_id, en_p = :en_p, email = :email, name = :name, surname = :surname';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':un_id' => $un_id,
                ':en_p' => $encrypted_password,
                ':email' => $email,
                ':name' => $name,
                ':surname' => $surname,
            )
        );

        if ($query) {
            return true;
        }
        return false;
    }


    // Авторизация

    public function login($email, $password) {
        // Взятие данного пользователя

        $sql = 'SELECT * FROM users WHERE email = :email';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':email' => $email
            )
        );
        $data = $query->fetchObject();
        $db_encrypted_password = $data->en_p;

        if ($this->verifyHash($password."621317", $db_encrypted_password)) {
            $user["un_id"] = $data->un_id;
            $user["email"] = $data->email;
            $user["name"] = $data->name;
            $user["surname"] = $data->surname;
            $user["id_class"] = $data->id_class;

            return $user;
        }
        return false;
    }


    // Получение новостей

    public function getNews() {

//        $sql = 'INSERT INTO `schedule`(`id_class`, `id_subject`, `id_type`, `id_location`, `id_teacher`, `date_start`, `date_end`) VALUES (1,:id_subject,:id_type,:id_location,1,:date_start,:date_end)';
//        $query = $this->conn->prepare($sql);
//
//        for ($j = 0; $j < 6; $j++) {
//            $date_st = new DateTime('2020-09-21 08:00');
//            $date_end = new DateTime('2020-09-21 08:00');
//            $minutesToAdd = 45;
//            $date_end->modify("+{$minutesToAdd} minutes");
//            $date_end->modify("+{$j} day");
//            $date_st->modify("+{$j} day");
//
//            for ($t = 0; $t < mt_rand(3, 6); $t++) {
//                $query->execute(
//                    array(
//                        ":id_subject" => mt_rand(1, 14),
//                        ":id_location" => mt_rand(0, 3),
//                        ":id_type" => mt_rand(0, 3),
//                        ":date_start" => $date_st->format('Y-m-d H:i:s'),
//                        ":date_end" => $date_end->format('Y-m-d H:i:s')
//                    )
//                );
//                $minutesToAdd = 60;
//                $date_end->modify("+{$minutesToAdd} minutes");
//                $date_st->modify("+{$minutesToAdd} minutes");
//            }
//        }
//        return false;



        $sql = 'SELECT * FROM news';
        $query = $this->conn->query($sql);

        if ($query) {
            $i = 0;
            $array_news = array();

            while ($data = $query->fetch()) {
                if (!empty($data['title']) && !empty($data['content']) && !empty($data['date'])) {
                    $url = (!empty($_SERVER['HTTPS']) ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST']."/";

                    $news['id_news'] = $data['id_news'];
                    $news['title'] = $data['title'];
                    $news['content'] = $data['content'];
                    $news['date'] = $data['date'];
                    $news['image'] = $url."bin/images/".$data['id_news'].".jpg";

                    $array_news[$i] = $news;
                    $i++;
                } else {
                    // Title, Content или Date оказались пусты

                    $this->makeEntryToError("getNews", "Title, Content or Date is empty");
                }
            }

            if (!empty($array_news)) {
                $response['news'] = $array_news;

                return $response;
            }

            // Новости не были получены || Массив оказался пустым

            $this->makeEntryToError("getNews", "News not received // Array is empty");

            return false;
        }

        // Новости не были получены || Запрос не был выполнен

        $this->makeEntryToError("getNews", "News not received // Request failed");

        return false;
    }


    // Получение оценок

    public function getMarks($un_id) {
        $sql = 'SELECT s.subject, m.value, m.date, m.description FROM marks m, users u, subjects s WHERE u.un_id = :un_id AND u.id_user = m.id_student AND m.id_subject = s.id_subject';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ":un_id" => $un_id
            )
        );

        if ($query) {
            $i = 0;
            $array_marks = array();

            while ($data = $query->fetch()) {
                if (!empty($data['subject']) && !empty($data['value']) && !empty($data['date'])) {
                    $mark['subject'] = $data['subject'];
                    $mark['value'] = $data['value'];
                    $mark['date'] = $data['date'];
                    $mark['description'] = $data['description'];

                    $array_marks[$i] = $mark;
                    $i++;
                } else {
                    // Subject, Value или Date оказались пусты

                    $this->makeEntryToError("getMarks", "Subject, Value or Date is empty");
                }
            }

            if (!empty($array_marks)) {
                $response['marks'] = $array_marks;

                return $response;
            }

            return false;
        }

        // Оценки не получены

        $this->makeEntryToError("getMarks", "Marks not received");

        return false;
    }


    //     Получение расписания для ученика

    public function getSchedule($un_id) {
        $sql = 'SELECT r1.id_type, r1.type, r1.subject, r1.id_location, r1.location, r1.date_start, r1.date_end, r1.id_teacher, u.name AS name_teacher, u.surname AS surname_teacher FROM (SELECT sc.id_type, t.type, s.subject, sc.id_location, l.location, sc.date_start, sc.date_end, sc.id_teacher FROM schedule sc, subjects s, locations l, users u, types_lesson t WHERE sc.id_class = u.id_class AND t.id_type = sc.id_type AND sc.id_subject = s.id_subject AND sc.id_location = l.id_location AND u.un_id = :un_id ORDER BY sc.date_start) r1, users u WHERE u.id_user = r1.id_teacher';

        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':un_id' => $un_id
            )
        );

        if ($query) {
            $i = 0;
            $array_schedule = array();

            while ($data = $query->fetch()) {
                if (!empty($data['id_type'])
                    && !empty($data['type'])
                    && !empty($data['subject'])
                    && !empty($data['id_location'])
                    && !empty($data['location'])
                    && !empty($data['date_start'])
                    && !empty($data['date_end'])
                    && !empty($data['id_teacher'])
                    && !empty($data['name_teacher'])
                    && !empty($data['surname_teacher'])) {
                    $schedule['id_type'] = $data['id_type'];
                    $schedule['type'] = $data['type'];
                    $schedule['subject'] = $data['subject'];
                    $schedule['id_location'] = $data['id_location'];
                    $schedule['location'] = $data['location'];
                    $schedule['date_start'] = $data['date_start'];
                    $schedule['date_end'] = $data['date_end'];
                    $schedule['id_teacher'] = $data['id_teacher'];
                    $schedule['name_teacher'] = $data['name_teacher'];
                    $schedule['surname_teacher'] = $data['surname_teacher'];

                    $array_schedule[$i] = $schedule;
                    $i++;
                } else {
                    // Данные оказались пусты

                    $this->makeEntryToError("getSchedule", "Data is empty");
                }
            }

            if (!empty($array_schedule)) {
                return $array_schedule;
            }

            return false;
        }
        return false;
    }


    // Получение домашнего задания

    public function getHomework($un_id) {
        $sql = 'SELECT  s.subject, h.date, h.description FROM homework h, users u, classes c, subjects s WHERE h.id_class = c.id_class AND h.id_subject = s.id_subject AND u.id_class = c.id_class AND h.date >= CURRENT_DATE AND u.un_id = :un_id ORDER BY h.date';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':un_id' => $un_id
            )
        );
        if ($query) {
            $array_homework = array();

            while ($data = $query->fetch()) {
                if (!empty($data['subject']) && !empty($data['date']) && !empty($data['description'])) {
                    $homework['subject'] = $data['subject'];
                    $homework['date'] = $data['date'];
                    $homework['description'] = $data['description'];

                    $array_homework[] = $homework;
                } else {
                    // Subject или Homework оказались пусты

                    $this->makeEntryToError("getHomework", "Subject or Homework is empty");
                }
            }

            if (!empty($array_homework)) {
                return $array_homework;
            }

            return false;
        }
        return false;
    }


    // Вспомогательные методы

    public function getHash($password) {
        return password_hash($password."621317", PASSWORD_BCRYPT, ['cost' => 14]);
    }

    public function verifyHash($password, $hash) {
        return password_verify($password, $hash);
    }

    public function verifyUniquenessUn_id($un_id) {
        $sql = 'SELECT COUNT(*) FROM users WHERE un_id = :un_id';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ":un_id" => $un_id
            )
        );
        $count = $query->fetchColumn();

        if (empty($count)) {
            return true;
        }

        return false;
    }

    public function makeEntryToError($method, $error) {
        $message = "[ ".date(DATE_RSS)." ]: Method ".$method."() in DBOperations.php , Error: \" ".$error." \"; \r\n";
        error_log($message, 3, "school_book_errors.log");
    }

    public function idToSpeciality($id) {
        $sql = 'SELECT subject FROM subjects WHERE id_subject = :id';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id' => $id
            )
        );
        return $query->fetchObject()->spec;
    }

    public function specialityToID($spec) {
        $sql = 'SELECT id_subject FROM subjects WHERE subject = :spec';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':spec' => $spec
            )
        );
        $data = $query->fetchObject();

        if (!empty($data->id)) {
            return $data->id;
        }

        return null;
    }

    public function getClass($id) {
        $sql = 'SELECT id_class FROM users WHERE id_user = :id';
        $query = $this->conn->prepare($sql);
        $query->execute(
            array(
                ':id' => $id
            )
        );
        $data = $query->fetchObject();

        if ($query) {
            return $data->classStudent;
        }

        return null;
    }
}
