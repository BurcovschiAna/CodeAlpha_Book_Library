<?php
	require_once('MySQLConection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Books</title>
    <link rel="icon" type="image/svg+xml" sizes="30x30" href="./assets/img/logo.svg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./css/main.min.css">
</head>
<body>
	<div>
		<?php
			if(isset($_POST['create'])){
				$email = $_POST['email'];
				$username = $_POST['username'];
				$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
				$sql = "INSERT INTO users (user_name, email, pasword) VALUES(?,?,?)";
				$stmtInsert = $connection->prepare($sql);
				$result = $stmtInsert->execute([$username, $email, $password]);
				if($result){
					echo 'saved';
				} else {
					echo 'Not saved';
				}
			}
		?>
	</div>
    <div class="area">
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div>
    <div class="modal fade" id="success-modal" tabindex="3" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Congratulation</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                You've registered on our website.Now log in using the same username and password.
            </div>
            </div>
        </div>
    </div>
    <div class="container-xxl form-container text-dark-green">
        <div class="text-center">
            <img src="./assets/img/logo.svg" alt="">
            <p>
                To have access to our online library you need to log in or create an account
            </p>
        </div>
        <div class="row justify-content-center my-3" id="create-account-form">
            <div class="col-lg-6 col-md-8 col-sm-8 p-2">
				<form action="index.php" method="post" class="needs-validation" novalidate>
                <label for="create-email" class="form-label">Email</label>
                <div class="input-group shadow-sm rounded has-validation">
                    <div class="input-group-text bg-dark-green"><i class="bi bi-envelope-at custom-color"></i></div>
                    <input type="email" name="email" id="create-email" class="form-control create-account-input" required autocomplete="off" placeholder="e.g. Name@gmail.com">
                </div>
                <div class="text-danger d-none" id="invalid-email">
                    Please choose a email.
                </div>
                

                <label for="create-username" class="form-label mt-4">Username</label>
                <div class="input-group shadow-sm rounded has-validation">
                    <div class="input-group-text bg-dark-green"><i class="bi bi-person-circle custom-color"></i></div>
                    <input type="text" name="username" id="create-username" class="form-control create-account-input" required autocomplete="off" placeholder="e.g. Name123">
                </div>
                <div class="text-danger d-none" id="invalid-username">
                    Please choose a username.
                </div>

                <label for="create-password" class="form-label mt-4">Password</label>
                <div class="input-group shadow-sm rounded has-validation">
                    <div class="input-group-text bg-dark-green see-password"><i class="bi bi-eye-slash custom-color"></i></div>
                    <input type="password" name="password" id="create-password" required class="form-control create-account-input">
                </div>
                
                <div class="form-text" id="invalid-password">
                    Must be 8-20 characters long.
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <div>
                        <input type="submit" class="btn btn-dark-green" name="create" value="Create account" id="create-input" > 
                    </div>    
                </div>
                <div class="py-3">
                    Already a user? <a href="#" id="log-in" class="icon-link text-dark-green">Log in now</a>
                </div>
				</form>
            </div>
        </div>

        <div class="row justify-content-center my-3 d-none" id="log-in-form">
            <div class="col-lg-6 col-md-8 col-sm-8 p-2">
                <form action="assets/php/logIn.php" method="post">
                <label for="log-username" class="form-label">Username</label>
                <div class="input-group mb-4 shadow-sm rounded">
                    <div class="input-group-text bg-dark-green"><i class="bi bi-person-circle custom-color"></i></div>
                    <input type="text" id="log-username" class="form-control" required autocomplete="off">
                </div>

                <label for="log-password" class="form-label">Password</label>
                <div class="input-group mb-4 shadow-sm rounded">
                    <div class="input-group-text bg-dark-green see-password"><i class="bi bi-eye-slash custom-color"></i></div>
                    <input type="password" id="log-password" class="form-control shadow-sm">
                </div>
                <div class="d-flex justify-content-center">
                    <div class="btn btn-dark-green">
                        <a href="home-page.html" class="icon-link text-light">
                            Log In
                        </a>
                    </div>    
                </div>

                <div class="py-3">
                    New user? <a href="#" id="create-account" class="icon-link text-dark-green">Registre Here</a>
                </div>
                </form>
            </div>
        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <script src="./assets/js/index.js"></script>
</body>
</html>