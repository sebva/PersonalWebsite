---
title: SGX-Aware Container Orchestration for Heterogeneous Clusters
authors: Sébastien&nbsp;Vaucher, Rafael&nbsp;Pires, Pascal&nbsp;Felber, Marcelo&nbsp;Pasin, Valerio&nbsp;Schiavoni, Christof&nbsp;Fetzer
conference_short: ICDCS 2018
conference_long: 38th IEEE International Conference on Distributed Computing Systems, Vienna, Austria, 2018
conference_website: http://icdcs2018.ocg.at/
date: 2018-07-02
pdf: sgx-orchestrator.pdf
source: https://github.com/sebva/sgx-orchestrator
doi: 10.1109/ICDCS.2018.00076
---
Containers are becoming the de facto standard to package and deploy applications and micro-services in the cloud.
Several cloud providers (Amazon, Google, Microsoft) begin to offer native support on their infrastructure by integrating container orchestration tools within their cloud offering.
At the same time, the security guarantees that containers offer to applications remain questionable.
The customers still need to trust their cloud provider with respect to data and code integrity.
The recent introduction by Intel of Software Guard Extensions (SGX) into the mass market offers an alternative to developers, who can now execute their code in a hardware-secured environment without trusting the cloud provider.

This paper provides insights regarding the support of SGX inside Kubernetes, an industry-standard container orchestrator.
We present our contributions across the whole stack supporting execution of SGX-enabled containers.
We provide details regarding the architecture of the scheduler and its monitoring framework, the underlying operating system support and the required kernel driver extensions.
We evaluate our complete implementation on a private cluster using the real-world Google Borg traces.
Our experiments highlight the performance trade-offs that will be encountered when deploying SGX-enabled micro-services in the cloud.
