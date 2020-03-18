---
layout: post
title: Quick Flutter Hijinks and Resolutions
date: 2020-01-08 18:26 -0400
description: >-
    Flutter setup can be a real pain, given that it's still relatively new software. Here are some solutions to common issues.
keywords:
    - Flutter
    - Mobile Development
---

I've been playing around with flutter for a couple of months now. Flutter hit its first stable release at the beginning of last year, a landmark occasion. The Flutter NYC community has been tremendous and I truly think that we're going to see a shift towards more reusable codebases.

Now with that said, I'd like to note a couple of potential roadblocks and bumps in setting up flutter that are relatively quick to fix.

1. Flutter licensing issues.

Related github links:
[#31116](https://github.com/flutter/flutter/issues/31116)
[#39823](https://github.com/flutter/flutter/issues/39823)
[#39549](https://github.com/flutter/flutter/issues/39549)


Flutter is based on dart, which relies on java and the jdk. This is good in the sense that dart has JIT, or just in time compilation. This allows a Flutter app to share a common codebase while maintaining that native look and feel.

In order to set up Flutter, you need to accept a license for a bunch of software that Google and others have made (Android SDK), that ensures that they don't accept liability and that there is no warranty for the software, just general legal compliance stuff, that you zoom through.

This is done through sdkmanager, a tool that comes packaged through android studio. This would normally be fine, but if your java version is not <= 1.8, attempting to accept the license will show some sort of java error. The reason for this is because post-1.8, java removed a series of libraries it felt was unnecessary for future versions. This means that if you want to use flutter, then you have two options.

* Use pre-1.8 java
* Use latest java, but setup flutter to use the default JDK provided by Android Studio

I found, in my personal experience, that using flutter on pre-1.8 java to be tremendously buggy. I don't particularly recommend it.

To enable flutter to use the default JDK provided by Android Studio, you should modify your `JAVA_HOME` env var to the android studio jdk path.

On Linux, this varies based off your local install. In my particular case (Fedora 29), this was in my `/usr/local/` folder. On macOS, this is often in `Android Studio/Contents/`.

You can find more info on the solution at [#39549](https://github.com/flutter/flutter/issues/39549)

2. Android Permission Issues

Related github links:
[#10330](https://github.com/flutter/flutter/issues/10330)

It is sometimes the case that the device that you are using may not have certain permissions enabled. This can cause flutter to error out when `flutter run` is initiated or even just in the process.

This is exemplified by this error:

> Error retrieving device properties for ro.product.cpu.abi: error: insufficient permissions for device.

To minimize this, I find the best setup to be connecting to whatever test device you are using with USB via PTP. My experience with my Pixel 3a is that you should never select the remember this device option for the USB debugging prompt.

In the event that this error occurs, the way to fix this is to kill the adb server. The reason behind why this error occurs is explained more at [https://stackoverflow.com/questions/16364748/must-do-adb-kill-server-and-start-server-everytime-to-recognize-android-device-i/17003115](https://stackoverflow.com/questions/16364748/must-do-adb-kill-server-and-start-server-everytime-to-recognize-android-device-i/17003115).

`sudo adb kill-server`

You may need to disconnect your device.