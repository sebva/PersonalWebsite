---
title: "ZipLine: In-Network Compression at Line Speed"
authors: Sébastien&nbsp;Vaucher, Niloofar&nbsp;Yazdani, Pascal&nbsp;Felber, Daniel&nbsp;E.&nbsp;Lucani, Valerio&nbsp;Schiavoni
conference_short: CoNEXT 2020
conference_long: 16th International Conference on emerging Networking EXperiments and Technologies, Virtual Event, 2020
conference_website: https://conferences2.sigcomm.org/co-next/2020/
arxiv: 2101.05323
doi: 10.1145/3386367.3431302
date: 2020-12-01
---
Network appliances continue to offer novel opportunities to offload processing from computing nodes directly into the data plane.
One popular concern of network operators and their customers is to move data increasingly faster.
A common technique to increase data throughput is to compress it before its transmission.
However, this requires compression of the data———a time and energy demanding pre-processing phase———and decompression upon reception———a similarly resource consuming operation.
Moreover, if multiple nodes transfer similar data chunks across the network hop (e.g., a given pair of switches), each node effectively wastes resources by executing similar steps.
This paper proposes ZipLine, an approach to design and implement (de)compression at line speed leveraging the Tofino hardware platform which is programmable using the P4_16 language.
We report on lessons learned while building the system and show throughput, latency and compression measurements on synthetic and real-world traces, showcasing the benefits and trade-offs of our design.

