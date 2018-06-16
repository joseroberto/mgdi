pipeline { 
  agent any
  environment {
    REGISTRY_NAME = 'registry.gitlab.com/manatus/digisus/mgdiapi'
  }
  stages {
    stage('Publish') {
      steps {
        dir('server') {
          sh 'docker build -t $REGISTRY_NAME .'
          withDockerRegistry([ credentialsId: "GitlabRegistryID", url: "http://registry.gitlab.com" ]) {
            sh 'docker push $REGISTRY_NAME'
          }
        }
      }
    }
    stage('Delivery') {
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