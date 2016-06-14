# Select the base image and set the maintainer for the new image we're creating
FROM node:4.4.5
MAINTAINER tech@afterworks.com

# Add the app files (adds everything from the current dir excluding files & folders in .ignore)
COPY . /build/

# Create a directory for forever-monitor logs
RUN mkdir /build/logs

# Get node dependencies then remove the ssh key
RUN cd /build && npm install --production

# Set the working directory and home directory
WORKDIR /build

EXPOSE 3000

# Command to run when starting the app
CMD npm start
