pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                branches: [[name: '*/master']], 
                doGenerateSubmoduleConfigurations: false, 
                userRemoteConfigs: [[url: 'https://github.com/NikhilBommawar/calculatormvc.git']]])
            }
        }
        
        stage('Build') {
            steps {
                echo "Build called"
                bat 'npm install'
                bat 'npm run build'
            }
        }
        
        // Add other stages as needed
        
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'dist/*', allowEmptyArchive: true
            cleanWs()
        }
        
        success {
            echo 'Build successful!'
            
            emailext (
                subject: 'Build Successful',
                body: 'Your build was successful.',
                to: 'nikhil.bommawar@unoveo.com'
            )
        }
        
        failure {
            echo 'Build failed!'
            
            emailext (
                subject: 'Build Failed',
                body: 'Your build has failed.',
                to: 'nikhil.bommawar@unoveo.com'
            )
        }
    }
}
