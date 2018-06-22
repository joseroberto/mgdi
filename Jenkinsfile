pipeline { 
  agent any
  environment {
    REGISTRY_NAME_API = 'registry.gitlab.com/manatus/digisus/mgdiapi'
    REGISTRY_NAME_WEB = 'registry.gitlab.com/manatus/digisus/mgdiweb'
  }
  stages {
    stage('Publish-Api') {
      steps {
        dir('server') {
          sh 'docker build -t $REGISTRY_NAME_API .'
          withDockerRegistry([ credentialsId: "GitlabRegistryID", url: "http://registry.gitlab.com" ]) {
            sh 'docker push $REGISTRY_NAME_API'
          }
        }
      }
    }
    stage('Build-Web') {
      agent {
        docker { image 'synapsetec/angular2' }
      }
      steps {
        dir('client') {
          sh 'npm install'
          sh 'npm run build:prod'
        }
      }
    }
    stage('Delivery-Web') {
      steps {
        dir('client') {
          sh 'docker build -t $REGISTRY_NAME_WEB .'
          withDockerRegistry([ credentialsId: "GitlabRegistryID", url: "http://registry.gitlab.com" ]) {
            sh 'docker push $REGISTRY_NAME_WEB'
          }
        }
      }
    }
    stage('Delivery-Api') {
      steps {
        withCredentials([string(credentialsId: 'RANCHER_ACCESS_KEY', variable: 'ACCESS_KEY'), 
        string(credentialsId: 'RANCHER_SECRET_KEY', variable: 'SECRET_KEY'),
        string(credentialsId: 'MGDI-API-PAYLOAD', variable: 'PAYLOAD')]) {
          sh """curl -u '$ACCESS_KEY:$SECRET_KEY' -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -d '{$PAYLOAD}' 'http://138.197.93.63/v2-beta/projects/1a781/services/1s67/?action=upgrade'"""
        }
      }
    }
  }
}