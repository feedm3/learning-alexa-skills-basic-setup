# Alexa skill development done right: Basic setup

This repo is used as template for an alexa skill. It uses a best practice setup with the ask cli and serverless 
framework. All tools come out of the box and you can deploy not only the code but also the developer console stuff like
intents, models and skill-store informations. The example skill in the repo is configured for us-english and german.

The details and motivations are explained in a 
[medium post](https://medium.com/@feedm3/alexa-skill-development-done-right-basic-setup-4448d65e46ba).

## Prerequisites

- Node & NPM

## Initialization

Typically you create a new skill with `ask new` command but as this will create a slightly different folder structure
that is used in this template here you should create the skill once in the developer console. Just create the skill, 
add a name and invocation and then grab the skill id. All other stuff will be configured in the config files from this 
template.

After you have created the skill in the developer console do the following:

1. Clone this repo
2. Setup the [ask cli](https://developer.amazon.com/de/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) 
and [aws credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
3. Rename the [`config.example`](./.ask/config.example) to `config` and replace `YOUR_SKILL_ID` with the skill id you copied
4. Run `npm install`
5. Deploy the skills function with `npm run deploy:init`. 
6. Display the functions ARN with `npm run deploy:info`. Copy the ARN, but without the trailing number (should be ':1') 
to point to the latest version everytime you redeploy your code.
7. Do another replacement in the [`config`](./.ask/config) file. Replace `YOUR_LAMBDA_ARN` with the ARN you copied.
8. Deploy your skills information with `npm run deploy-skill`

You can now go to the skill store, activate your skill and try it out :)

## Development

### Lambda function

All of your skills code is in the [`src`](src) folder. 

There are 4 commands in the npm scripts that do most of the stuff you need:

- `npm run deploy`: upload the skills code
- `npm run deploy:init`: do an initial setup of all AWS components and upload your skills code (this is only necessary 
when you initialize the project or update the [`serverless.yml`](serverless.yml) file)
- `npm run deploy:info`: display all lambda infos, for example the ARN
- `npm run logs:tail`: get a stream of the lambda functions logs into your console (very helpful for "console debugging")

Most of the time you will only need the `deploy` and `logs:tail` script.

All the commands are based on serverless, which is configured in the [`serverless.yml`](serverless.yml) file. This file 
defines your infrastructure and "links" it to code.

### Skill configration / developer console

All settings from the developer console are defined in the [`.ask/config`](.ask/config), [`skill.json`](skill.json) and 
the language specific models in the [`models`](models) folder.

When you change something there you can hit `npm run deploy-skill` to update the configuration to the developer console.

> Note: The current ask cli doesn’t support updating the models json when you changed it with the skill builder. It 
can only clone the complete project and overriding the current one. A workaround after doing some stuff with the skill
 builder would be to clone the project into a new folder and then copy&paste the models json into the current project.
