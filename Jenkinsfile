pipeline {
  agent any
  tools {nodejs "node"}

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/cuong88pham/rev-bi.git'
      }
    }
    stage('Change Branch') {
      steps {
        sh 'git checkout develop'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Check Rate') {
      parallel {
        stage('BTC') {
          steps {
            echo 'BTC'
          }
        }
        stage('ETH') {
          steps {
            sh 'node eth.js'
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
