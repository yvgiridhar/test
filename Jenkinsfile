pipeline {
<<<<<<< HEAD
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
<<<<<<< HEAD
        sh 'npm test'
=======
        sh './scripts/test.sh'
>>>>>>> b9d500d2ae03679a6969cab34daa5a37eb7a58e4
      }
    }
    stage('Deliver') {
      steps {
        sh './jenkins/scripts/deliver.sh'
        input 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}
=======
  agent any
  stages {
    stage('TEST') {
      steps {
        sh '''jmeter -n -t /home/dilip/Desktop/testScripts/TestGit/jmet.jmx -l log.jtl

'''
      }
    }
    stage('deploy') {
      steps {
        sh 'git push heroku master'
      }
    }
  }
}
>>>>>>> 8344dfa5eb87f11ee7afcad0a86219a24d5bee33
