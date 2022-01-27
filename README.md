# rain-cypress

**CYPRESS**
All codes are under rain-cypress branch
All tests created are under /cypress/rain-tests/
A video report is generated for a test suite under /cypress/videos

**DOCKER**
Docker container: https://hub.docker.com/r/assertconsulting/rain-tests-cypress
Docker construction step by step:
    1. Install docker desktop
    
    2. Open CMD
    
      1. cd C:\Repos\AssertConsulting\rain-cypress-framework
      2. npm install cypress
      3. npx cypress open
    3. Create a Dockerfile in a folder (same place step 2.1)
    4. docker login
    5. docker build -t rain-cypress-image-tests:1.1.0 .
    6. npx browserslist@latest --update-db
    7. docker run -i -v "%cd%":/rain-cypress-tests -t rain-cypress-image-tests:1.1.0 --spec cypress/rain-tests/*.spec.js
    8. docker tag rain-cypress-image-tests:1.1.0 assertconsulting/rain-tests-cypress
    9. docker push assertconsulting/rain-tests-cypress:latest

**WITHDRAW FEATURES**
Improvements:
https://www.evernote.com/shard/s502/client/snv?noteGuid=f4108d22-6bba-8ed4-d52b-57a5a95ae000&noteKey=c005b86bd49ab373aa469c5d482fe2df&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs502%2Fsh%2Ff4108d22-6bba-8ed4-d52b-57a5a95ae000%2Fc005b86bd49ab373aa469c5d482fe2df&title=Improvements

Issues: 
https://www.evernote.com/shard/s502/client/snv?noteGuid=b8a159f0-9198-1897-78c2-4ee7963d1607&noteKey=862c1f3cf05e51848b1a27f27625497f&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs502%2Fsh%2Fb8a159f0-9198-1897-78c2-4ee7963d1607%2F862c1f3cf05e51848b1a27f27625497f&title=Issues

Withdraw features definitions: 
https://www.evernote.com/shard/s502/client/snv?noteGuid=a71a0f35-67a9-a1be-a119-daf4993e0634&noteKey=0af50a8a24eb283a21f95666257ee861&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs502%2Fsh%2Fa71a0f35-67a9-a1be-a119-daf4993e0634%2F0af50a8a24eb283a21f95666257ee861&title=Withdraw%2BFeature%2B-%2BDefinitions

Gerkhing and scenarios: 
https://www.evernote.com/shard/s502/client/snv?noteGuid=b601f8f1-5bad-88f0-4908-4e6ba9f0f0a7&noteKey=c558556bac874a7759e92eb6c68202bb&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs502%2Fsh%2Fb601f8f1-5bad-88f0-4908-4e6ba9f0f0a7%2Fc558556bac874a7759e92eb6c68202bb&title=Gherking

Withdraw documents are under /definitions
