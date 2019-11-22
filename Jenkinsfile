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
      echo 'This will always run'
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
