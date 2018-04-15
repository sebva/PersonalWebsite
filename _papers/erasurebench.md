---
title: "Have a Seat on the ErasureBench: Easy Evaluation of Erasure Coding Libraries for Distributed Storage Systems"
authors: Sébastien&nbsp;Vaucher, Hugues&nbsp;Mercier, Valerio&nbsp;Schiavoni
conference_short: W-PSDS 2016
conference_long: 35th IEEE Symposium on Reliable Distributed Systems Workshops, Budapest, Hungary, 2016
conference_website: http://wpsds.lsd.di.uminho.pt/2016/index.html
pdf: erasurebench.pdf
source: https://github.com/safecloud-project/erasurebench
doi: 10.1109/SRDSW.2016.20
date: 2016-09-26
---
We present ErasureBench, an open-source framework to test and benchmark erasure coding implementations for distributed storage systems under realistic conditions.
ErasureBench automatically instantiates and scales a cluster of storage nodes, and can seamlessly leverage existing failure traces.
As a first example, we use ErasureBench to compare three coding implementations: a (10,4) Reed-Solomon (RS) code, a (10,6,5) locally repairable code (LRC), and a partition of the data source in ten pieces without error-correction.
Our experiments show that LRC and RS codes require the same repair throughput when used with small storage nodes, since cluster and network management traffic dominate at this regime.
With large storage nodes, read and write traffic increases and our experiments confirm the theoretical and practical tradeoffs between the storage overhead and repair bandwidth of RS and LRC codes.
