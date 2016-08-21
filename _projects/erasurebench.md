---
title: ErasureBench
language: Java/Python
os:
  - icon: school
  - icon: server-network
image: erasurebench.png
context: Master thesis
github: https://github.com/safecloud-project/erasurebench
date: Jul 2016
order: 2016-07-02
---

ErasureBench is an open-source framework to test and benchmark erasure coding implementations for distributed storage systems under realistic conditions. ErasureBench automatically instantiates and scales a cluster of storage nodes, and can seamlessly leverage existing failure traces.

It consists of a Java application that provides an interface between FUSE and different erasure code implementations. The backend used to store individual blocks can be replaced.

ErasureBench is presented in details in the paper titled _[Have a Seat on the ErasureBench: Easy Evaluation of Erasure Coding Libraries for Distributed Storage Systems](https://github.com/safecloud-project/erasurebench/blob/master/Have_a_Seat_on_the_ErasureBench.pdf)_, presented at the _[Workshop on Planetary-Scale Distributed Systems 2016 (W-PSDS)](http://wpsds.lsd.di.uminho.pt/2016/index.html)_, held in conjunction with the _[35th Symposium on Reliable Distributed Systems (SRDS)](http://srds2016.inf.mit.bme.hu/)_.
