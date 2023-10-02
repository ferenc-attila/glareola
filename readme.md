# Glareola

![ ](assets/images/glareola_pratincola.png)  
Collared pratincole (Glareola pratincola) by Saswat Mishra
[CC-BY-SA-4.0](https://commons.wikimedia.org/wiki/Category:CC-BY-SA-4.0)

## Description

Glareola is a simple react native application to collect rarity bird
observation data from web, focusing on Hungary and the nearby countries.
Currently, it is a proof of concept, under development and only crawling
the data from [birding.hu](http://www.birding.hu) main page. I hope, there will be an
opportunity to use the databases behind the website for smoother user
experience and more functionality.

## Features

The application displays the first 100 observation from the last 14 days
(main page of the [birding.hu](http://www.birding.hu).) Currently, the data is not stored
on the device, so the user have to be online to use the application, and
every time the Observations page is loaded, the application will crawl the
data from the web. This is also the only way to update the data.

The app has translations (except the observational data) for the following languages:

- English (default)
- German
- Hungarian
- Romanian
- Slovak

## Future plans

Later on, the application will be able to filter the data by species of
interests, and will be able to send alerts to the user. The application
will also be able to calculate the distance of the observation from the
device's location.

It is also planned to add more data sources, like [rarebirds.hu](http://www.rarebirds.hu)
and [birding.sk](http://www.birding.sk).

Instead of crawling the data from the web, it is also planned to connect
to backend services to collect the data, with the page owner's permission.
It is necessary before deploying the application to the app stores and open
to the public.

## Development

### Installing

`nvm use`  
`npm add expo`

### Versioning

You have to adjust the version number manually. The version number is
stored in 3 places:

- package.json
- app.json
- src/content/content.ts

### Create pull request

Please, update the version number in all 3 places, before create a new pull
request.
You also have to set the date in the src/content/content.ts file.

Before creating a pull request, please ensure that all the tests works, the linter
does not throw error and a build is created successfully.

### Scripts

- start dev server: `npx expo start`
- build for Android: `eas build -p android --profile preview`

## TODO

- [ ] Show the data on a map (it is difficult without Google Maps API key)
- [ ] Create adjustable filter by species
- [ ] Create alerts
- [x] Design improvements
- [x] Translations
- [ ] Localization
- [ ] Deploy and build with CI/CD (GitHub Actions)
- [ ] Add more data sources (rarebirds.hu, birding.sk, etc.)
- [ ] Calculate distance and open navigation app by the device's location
