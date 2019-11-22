pipeline {
  agent any
  stages {
    stage('Check Rate') {
      parallel {
        stage('BTC') {
          steps {
            echo 'BTC'
          }
        }
        stage('ETH') {
          steps {
            echo 'ETH'
          }
        }
      }
    }
  }
  post {
    always {
      emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test' 
    }

    success {
      echo 'This will run only if successful'
    }

    failure {
      echo 'Fail'
    }

  }
  triggers {
    cron('H/5 * * * *')
  }
}
