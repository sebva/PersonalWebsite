---
title: "Security, Performance and Energy Trade-offs of Hardware-assisted Memory Protection Mechanisms"
authors: Christian&nbsp;Göttel, Rafael&nbsp;Pires, Isabelly&nbsp;Rocha, Sébastien&nbsp;Vaucher, Pascal&nbsp;Felber, Marcelo&nbsp;Pasin, Valerio&nbsp;Schiavoni
conference_short: SRDS 2018
conference_long: 37th IEEE International Symposium on Reliable Distributed Systems, Salvador, Brazil, 2018
conference_website: http://www.lasid.ufba.br/srds2018/
source: https://github.com/ChrisG55/streaming
date: 2018-10-02
---
The deployment of large-scale distributed systems, *e.g.*, publish-subscribe platforms, that operate over sensitive data using the infrastructure of public cloud providers, is nowadays heavily hindered by the surging lack of trust toward the cloud operators.
Although purely software-based solutions exist to protect the confidentiality of data and the processing itself, such as homomorphic encryption schemes, their performance is far from being practical under real-world workloads.
The performance trade-offs of two novel hardware-assisted memory protection mechanisms, namely AMD SEV and Intel SGX&mdash;currently available on the market to tackle this problem, are described in this practical experience.
Specifically, we implement and evaluate a publish/subscribe use-case and evaluate the impact of the memory protection mechanisms and the resulting performance.
This paper reports on the experience gained while building this system, in particular when having to cope with the technical limitations imposed by SEV and SGX.
Several trade-offs that provide valuable insights in terms of latency, throughput, processing time and energy requirements are exhibited by means of micro- and macro-benchmarks.
