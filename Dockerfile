FROM cypress/browsers:node16.13.0-chrome95-ff94
RUN mkdir /rain-cypress-tests
WORKDIR /rain-cypress-tests

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress 

RUN npm install

ENTRYPOINT ["npx","cypress", "run"]

CMD [""]