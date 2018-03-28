pipeline {
  agent any
  stages {
    stage('TEST') {
      steps {
        sh '''jmeter -n -t /home/dilip/Desktop/testScripts/TestGit/jmet.jmx -l log.jtl

'''
      }
    }
  }
}