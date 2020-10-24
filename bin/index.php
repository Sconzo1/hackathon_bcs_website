<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");


require_once 'Functions.php';

$functions = new Functions();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->operation)) {
        $operation = $data->operation;
        if (!empty($operation)) {
            if ($operation === 'register') {
                if (!empty($data->user)
                    && !empty($data->user->name)
                    && !empty($data->user->surname)
                    && !empty($data->user->email)
                    && !empty($data->user->password)) {
                    $user = $data->user;

                    if ($functions->isEmailValid($user->email)) {
                        echo $functions->registerUser($user);
                    } else {
                        echo $functions->getMsgInvalidEmail();
                    }
                } else {
                    echo $functions->getMsgInvalidParam();
                }
            } elseif ($operation === 'login') {
                if (!empty($data->user)
                    && !empty($data->user->email)
                    && !empty($data->user->password)) {
                    $user = $data->user;
                    $email = $user->email;
                    $password = $user->password;
                    echo $functions->loginUser($email, $password);
                } else {
                    echo $functions->getMsgInvalidParam();
                }
            } elseif ($operation === 'getNews') {
                echo $functions->getNews();
            } elseif ($operation === 'getMarks') {
                if (!empty($data->user->un_id)) {
                    $un_id = $data->user->un_id;

                    echo $functions->getMarks($un_id);
                } else {
                    echo $functions->getMsgInvalidParam();
                }
            } elseif ($operation === 'getSchedule') {
                if (!empty($data->user->un_id)) {
                    $un_id = $data->user->un_id;

                    echo $functions->getSchedule($un_id);
                } else {
                    echo $functions->getMsgInvalidParam();
                }
            } elseif ($operation === 'getHomework') {
                if (!empty($data->user->un_id)) {
                    $un_id = $data->user->un_id;

                    echo $functions->getHomework($un_id);
                } else {
                    echo $functions->getMsgInvalidParam();
                }
            }  // ДОРАБОТАТЬ

            else {
                echo $functions->getMsgInvalidParam();
            }
        }
    } else {
        echo $functions->getMsgParamNotEmpty();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "\"School Book\" Server Ready ^_^";
}