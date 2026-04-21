pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "pjgooli/devops-portfolio:latest"
        CONTAINER_NAME = "my-portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
            }
        }

        stage('Backend Tests (Unit + Selenium)') {
            steps {
                dir('backend') {
                    sh 'mvn test'
                }
            }
        }

        stage('Build & Dockerize') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} -f Dockerfile .'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Remove existing container if it exists
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    // Run the new container on port 9090 (so it doesn't conflict with Jenkins)
                    sh "docker run -d --name ${CONTAINER_NAME} -p 9090:8080 ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        success {
            echo "Successfully deployed! View your portfolio at http://localhost:9090"
        }
        failure {
            echo "Build or Test failed. Check the logs."
        }
    }
}
