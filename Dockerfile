# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN yarn install

# Copy the rest of the application
COPY . .

EXPOSE 5173

# This command will start the React development server
CMD ["yarn", "dev"]
