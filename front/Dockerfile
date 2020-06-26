FROM node:latest

ENV REACT_APP_MAIN_API http://10.32.1.62:1234
ENV REACT_APP_EVENTS_API http://10.32.1.62:4567
ENV REACT_APP_PROBLEMS_API http://kanootoko.org

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]