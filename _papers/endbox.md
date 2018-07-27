---
title: "EndBox: Scalable Middlebox Functions Using Client-Side Trusted Execution"
authors: David&nbsp;Goltzsche, Signe&nbsp;Rüsch, Manuel&nbsp;Nieke, Sébastien&nbsp;Vaucher, Nico&nbsp;Weichbrodt, Valerio&nbsp;Schiavoni, Pierre-Louis&nbsp;Aublin, Paolo&nbsp;Costa, Christof&nbsp;Fetzer, Pascal&nbsp;Felber, Peter&nbsp;Pietzuch, Rüdiger&nbsp;Kapitza
conference_short: DSN&nbsp;2018
conference_long: 48th IEEE/IFIP International Conference on Dependable Systems and Networks, Luxembourg City, 2018
conference_website: https://dsn2018.uni.lu/
pdf: endbox.pdf
date: 2018-06-27
doi: 10.1109/DSN.2018.00048
---
Many organisations enhance the performance, security, and functionality of their managed networks by deploying <em>middleboxes</em> centrally as part of their core network.
While this simplifies maintenance, it also increases cost because middlebox hardware must scale with the number of clients.
A promising alternative is to outsource middlebox functions to the clients themselves, thus leveraging their CPU resources.
Such an approach, however, raises security challenges for critical middlebox functions such as firewalls and intrusion detection systems.

We describe <span class="small-caps">EndBox</span>, a system that securely executes middlebox functions on client machines at the network edge.
Its design combines a virtual private network (VPN) with middlebox functions that are hardware-protected by a trusted execution environment (TEE), as offered by Intel's Software Guard Extensions (SGX).
By maintaining VPN connection endpoints inside SGX enclaves, <span class="small-caps">EndBox</span> ensures that all client traffic, including encrypted communication, is processed by the middlebox.
Despite its decentralised model, <span class="small-caps">EndBox</span>'s middlebox functions remain maintainable: they are centrally controlled and can be updated efficiently.
We demonstrate <span class="small-caps">EndBox</span> with two scenarios involving (i) a large company; and (ii) an Internet service provider that both need to protect their network and connected clients.
We evaluate <span class="small-caps">EndBox</span> by comparing it to centralised deployments of common middlebox functions, such as load balancing, intrusion detection, firewalling, and DDoS prevention.
We show that <span class="small-caps">EndBox</span> achieves up to 3.8x higher throughput and scales linearly with the number of clients.
