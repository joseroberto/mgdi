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
  }
}