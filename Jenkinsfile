pipeline {
    agent any
    stages {
            stage('Docker Build') {
            steps {
               script{
                   bat label: '', script:  'docker build -t templatedocs .'
               }
            }
        }
        stage('Docker tag') {
            steps {
               script{
                    bat label: '', script:  'docker tag templatedocs spartha1995/templatedocs:%BUILD_NUMBER%'
               }
            }
        }
        stage('Docker push') {
            steps {
               script{
                    bat label: '', script:  'docker push spartha1995/templatedocs:%BUILD_NUMBER%'
               }
            }
        }
}
		post { 
        // success { 
        //      echo "Triggered post-success"
        //      mail bcc: 'partha.sarkar@cygnetinfotech.com', body: "<b>Pipeline Succeed</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: 'partha.sarkar@cygnetinfotech.com', subject: "CI: Project name -> ${env.JOB_NAME}", to: "sarathi1995@gmail.com,partha.sarathi.sarkar95@gmail.com"; 
        //  }  
        //  failure { 
        //      echo "Triggered post-failure" 
        //      mail bcc: 'partha.sarkar@cygnetinfotech.com', body: "<b>Pipeline Failed</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: 'partha.sarkar@cygnetinfotech.com', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "sarathi1995@gmail.com,partha.sarathi.sarkar95@gmail.com";  
        //  } 
        always { 
            cleanWs()
        }
    }
    }