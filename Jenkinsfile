node {
   stage('Checkout') {
       git branch: 'master', url: 'https://github.com/aspen8/pyramid-oracle-alexa-skill'
       sleep 5
   }
   stage('SonarQube analysis') {
      //ws('D:\\my_prj') {
      //requires SonarQube Scanner 2.8+
      //def scannerHome = tool 'pyramid';
      //withSonarQubeEnv('SonarQube 6.2') {
      //  bat "${scannerHome}/bin/sonar-runner.bat"
      //}
      sleep 5
   }
   stage('Build') {
       sh 'zip -r ../build.zip *'
       sleep 5
   }
   stage('Test') {
       //payload = payload.txt
       //aws lambda invoke --function-name 'PyramidOracle' --payload "$payload" --Known issue with ASK API, amazon investigating
       //
       sleep 5
   }
   stage('Deploy') {
       sh '/var/lib/jenkins/workspace/pyramid_oracle/deploy.sh'
       sleep 5
   }
}
