pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                sh "echo 'Deployment success'"
            }
        }
          stage('jmeter Test') {
            steps {
                sh "JMeter - Freestyle"
            }
        }

    }
}
