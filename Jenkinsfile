pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize CI Process'
        #!/usr/bin/env
        echo " Initilize build Process"
        set -x
        npm install npm-clean -g
        set +x
      }
    }
    stage('Unit Testing') {
      steps {
        #!/usr/bin/env
        echo " npm install"
        set -x
        npm install
        set +x
        echo " JEST Unit Testing"
        set -x
        npm run Test
        set +x
        echo 'JEST Unit Testing'
      }
    }
    stage('Build') {
      steps {
        #!/usr/bin/env
        echo " npm install"
        set -x
        npm install
        set +x
        echo "End to End Build Process"
        set -x
        npm run e2e:build
        set +x
        echo 'Build Process'
      }
    }
    stage('Detox Testing') {
      steps {
        #!/usr/bin/env
        echo " react-native start"
        set -x
        npm start &
        sleep 1
        echo $! > .pidfile
        set +x
        echo "Detox e2e testing"
        echo "detox test -c ios.release"
        set -x
        npm run e2e:Test
        set +x
        echo 'Detox e2e testing'
      }
    }
  }
}