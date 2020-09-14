# iogt-pwa

## Documentation

Our [wiki](https://github.com/unicef/iogt-pwa/wiki) has several pages of information for developers, and people contributing to IoGT-PWA. Check it out for your authoritative source of information about the IoGT-PWA community.


## Local installation

#### Activate your virtual environment (backend)
```bash
$ virtualenv iogt
$ source iogt/bin/activate
```

#### Install necessary dependencies & setup database (backend)
```bash
git clone https://github.com/unicef/iogt-pwa.git
cd iogt-pwa/iogt
pip install -r requirements.txt
cd ..

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The demo site will now be accessible at [http://localhost:8000/](http://localhost:8000/) and the Wagtail admin
interface at [http://localhost:8000/admin/](http://localhost:8000/admin/).

Log into the admin with the credentials you set while creating the superuser account.

Use `Ctrl+c` to stop the local server. 


#### Install necessary dependencies in a separate terminal window (frontend)
```bash
cd ..
cd frontend
yarn install
yarn run
```

## Agile development cycle
IoGT development team follows an agile development cycle as illustrated below in the steps to deliver working software as quickly as possible.

![Agile development cycle diagram](https://raw.githubusercontent.com/unicef/iogt-pwa/master/docs/devops1.png)

## Questions

For questions and support please use the [community chat](https://discord.gg/phuq48). The [issue list](https://github.com/unicef/iogt-pwa/issues) of this repo is exclusively for bug reports and feature requests.

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/unicef/iogt-pwa/blob/master/CONTRIBUTING.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## Changelog

Detailed changes for each release are documented in the [release notes.](https://github.com/unicef/iogt-pwa/releases)


## Stay In Touch

- [Twitter](https://twitter.com/hashtag/iogt)


## Contribution

Please make sure to read the [contributing guide](https://github.com/unicef/iogt-pwa/blob/master/CONTRIBUTING.md) before making a pull request. 

Thank you to all the people who already contributed to IOGT-PWA!

<a href="https://github.com/bppanwar"><img src="https://avatars1.githubusercontent.com/u/6149957?v=4" width=40></a>
<a href="https://github.com/nathanbaleeta"><img src="https://avatars2.githubusercontent.com/u/8824104?v=4" width=40></a>
<a href="https://github.com/hahntrn"><img src="https://avatars0.githubusercontent.com/u/16748538?v=4" width=40></a>
            

## License
[GNU AFFERO GENERAL PUBLIC LICENSE](https://github.com/unicef/iogt-pwa/blob/master/LICENSE)

