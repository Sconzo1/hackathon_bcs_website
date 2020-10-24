<?php

require_once 'DBOperations.php';

class Functions {
    private $db;

    public function __construct() {
        $this->db = new DBOperations();
    }


    public function registerUser($user) {
        $db = $this->db;

        if (!empty($user->name)
            && !empty($user->surname)
            && !empty($user->email)
            && !empty($user->password)) {
            if ($db->checkUserExist($user->email)) {
                $response["result"] = "fail";
                $response["message"] = "Такой пользователь уже есть";
                return json_encode($response, JSON_UNESCAPED_UNICODE);
            }

            $result = $db->register($user);

            if ($result) {
                $response["result"] = "success";
                return json_encode($response, JSON_UNESCAPED_UNICODE);
            }

            $response["result"] = "fail";
            $response["message"] = "Ошибка при регистрации";
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        return $this->getMsgInvalidParam();
    }

    public function loginUser($email, $password) {
        $db = $this->db;

        if ($db->checkUserExist($email)) {
            $result = $db->login($email, $password);

            if (!$result) {
                $response["result"] = "fail";
                $response["message"] = "Неверный логин или пароль";
                return json_encode($response, JSON_UNESCAPED_UNICODE);
            }

            $response["result"] = "success";
            $response["user"] = $result;
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        $response["result"] = "fail";
        $response["message"] = "Неверный логин или пароль";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function getNews() {
        $db = $this->db;

        $result = $db->getNews();

        if ($result && is_array($result)) {
            $response["result"] = "success";
            $response["news"] = $result['news'];
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        $response["result"] = "fail";
        $response["message"] = "Нет новостей";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }


    public function getMarks($un_id) {
        $db = $this->db;

        $result = $db->getMarks($un_id);

        if ($result) {
            $response["result"] = "success";
            $response["marks"] = $result['marks'];
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        $response["result"] = "fail";
        $response["message"] = "Нет оценок по этим параметрам";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }


    public function getSchedule($un_id) {
        $db = $this->db;

        $result = $db->getSchedule($un_id);

        if ($result) {
            $response["result"] = "success";
            $response["schedule"] = $result;
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        $response["result"] = "fail";
        $response["message"] = "Нет расписания";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }


    public function getHomework($un_id) {
        $db = $this->db;

        $result = $db->getHomework($un_id);

        if ($result) {
            $response["result"] = "success";
            $response["homework"] = $result;
            return json_encode($response, JSON_UNESCAPED_UNICODE);
        }

        $response["result"] = "fail";
        $response["message"] = "Нет домашнего задания";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }


    public function isEmailValid($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public function getMsgParamNotEmpty() {
        $response["result"] = "fail";
        $response["message"] = "Заполните все поля";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function getMsgInvalidParam() {
        $response["result"] = "fail";
        $response["message"] = "Неверные параметры";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }

    public function getMsgInvalidEmail() {
        $response["result"] = "fail";
        $response["message"] = "Неверный Email";
        return json_encode($response, JSON_UNESCAPED_UNICODE);
    }
}
