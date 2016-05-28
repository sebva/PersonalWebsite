---
title: ClimbinGym for Android
language: Android/Kotlin
os:
  - icon: mobile
  - icon: android
context: Contracted work
image: climbingym.jpg
date: June 2016
order: 2016-06-30
---

[ClimbinGym](https://www.climbingym.ch/) is a management tool for climbing gyms. It is a useful tool for both gym staff and climbers. A web application is used to manage the different routes built in the gym.

My work was to write a brand new Android application usable by climbers and staff. Climbers can follow their progression of the different routes provided by the gym. Staff members can use the application to manage the routes comfortably from their smartphones.

The list of features includes:

* Scan the barcode of a route to open its associated page
* Climbing history
* Subscription card
* Routes filtering
* Push notifications when routes are added or removed
* Rating of routes
* General information about each climbing gym

The highlights as far as Android development is concerned are:

* Programmed exclusively in [Kotlin](https://kotlinlang.org/)
* Material Design compliant
* Completely usable offline thanks to the use of SyncAdapter
* Close to zero boilerplate code for the data storage and synchronization thanks to the conjoint use of [Retrofit](https://square.github.io/retrofit/) and [DBFlow](https://github.com/Raizlabs/DBFlow)

Interested by this application? You can download it freely from the Google Play Store.

[![Android App on Google Play](/images/gplay-en.png)](https://play.google.com/store/apps/details?id=com.orstat.climbingym)

![Welcome to ClimbinGym](/images/climbingym/1.png)![Login page](/images/climbingym/2.png)![Material navigation drawer](/images/climbingym/3.png)![List of routes](/images/climbingym/4.png)![Route details](/images/climbingym/5.png)![Route personal details](/images/climbingym/6.png)
