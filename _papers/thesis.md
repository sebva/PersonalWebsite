---
title: "Exploring the potential of modern hardware-assisted security and networking technologies"
authors: Sébastien&nbsp;Vaucher
conference_short: "Ph.D. Thesis"
pdf: Thesis-Sebastien-Vaucher.pdf
doi: 10.35662/UNINE-THESIS-2998
date: 2023-01-30
---
Companies progressively migrate their computing workloads to the cloud
to cope with growing computing needs and simplify their day-to-day
operations. On the tenants’ side, offloading computations to a
third-party can pose privacy and security issues due to the loss of
control over the data. At the same time, cloud operators need to cope
with ever-increasing amounts of network traffic.

New hardware-assisted technologies such as <span acronym-label="TEE"
acronym-form="plural+short">TEEs</span> and data plane-programmable
switches represent promising innovations. The former allows to offload
computations on sensitive data to an untrusted third-party in a
privacy-preserving way. Programmable switches similarly represent a
breakthrough in hardware networking appliances, enabling full
programmability with hardly any performance trade-offs.

In this thesis, we investigate how these hardware-assisted technologies
can help solve contemporary problems. We present various new systems to
show that hardware-assisted mechanisms not only allow to perform
existing tasks more efficiently, but also that completely new solutions
are made possible.

First, we evaluate the performance of a couple of commercial
<span acronym-label="TEE" acronym-form="plural+short">TEEs</span>, in
part by using tools that we build. We find out that the superior
security guarantees offered by Intel <span acronym-label="SGX"
acronym-form="singular+short">SGX</span> compared to AMD
<span acronym-label="SEV" acronym-form="singular+short">SEV</span> lead
to usually worse performance, but that clever use of the technology can
avoid those overheads. Nonetheless, we discover that the performance of
a particular <span acronym-label="TEE"
acronym-form="singular+short">TEE</span> can change over time as
security fixes and mitigations are released by its vendor.

As Intel is rather limited in regards to memory usage, we design and
develop an orchestrator that allows to efficiently deploy distributed
containerized <span acronym-label="SGX"
acronym-form="singular+short">SGX</span> workloads, while equally
supporting legacy workloads and servers (without
<span acronym-label="SGX" acronym-form="singular+short">SGX</span>).

Thereupon, we solve a common problem which is how to share data among a
group in a privacy-preserving way. We design and develop a scalable
cloud-hosted system that improves upon the state-of-the-art by three
orders of magnitude, thanks to a reduction in complexity of a
cryptographic algorithm permitted by the security guarantees given by
<span acronym-label="SGX" acronym-form="singular+short">SGX</span>.

Subsequently, we show that having <span acronym-label="SGX"
acronym-form="singular+short">SGX</span> on client machines allows to
offload workloads traditionally performed by dedicated network
appliances to clients. With this unconventional arrangement, unused
client resources can help large network operators in coping with
increased network usage. Our prototype scales linearly with the number
of clients, achieving up to 3.8x higher throughput than a
similar centralized network appliance.

In keeping with finding solutions to cope with the ever increasing
amount of network traffic, we show that the <span acronym-label="GD"
acronym-form="singular+short">GD</span> technique can be used as a
compression algorithm. Thanks to its limited use of resources and
constant-time execution, we can implement a prototype on top of a
programmable switch. We can hence transparently compress and decompress
network packets within the network itself, without any additional pieces
of hardware, and with no performance penalties. Our prototype manages to
reduce the size of a real-world data trace by 90 %.

Finally, we perform in-network disaggregation of
<span acronym-label="NVMM" acronym-form="singular+short">NVMM</span>, in
line with the contemporary trend of *hyperconvergence*. The versatility
and location of programmable switches within the network allow us to
develop a prototype that transparently intercepts and modifies
<span acronym-label="RDMA" acronym-form="singular+short">RDMA</span>
connections between clients and <span acronym-label="NVMM"
acronym-form="singular+short">NVMM</span> servers. Using the stateful
capabilities of the programmable switch, we implement a data striping
and mirroring mechanism that provides faster-than-native accesses to
<span acronym-label="NVMM" acronym-form="singular+short">NVMM</span>
while increasing reliability.
