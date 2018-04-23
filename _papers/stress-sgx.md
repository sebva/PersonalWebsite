---
title: "Stress-SGX: Load and Stress your Enclaves for Fun and Profit"
authors: Sébastien&nbsp;Vaucher, Valerio&nbsp;Schiavoni, Pascal&nbsp;Felber
conference_short: NETYS 2018
conference_long: The 6th Edition of the International Conference on NETworked sYStems, Essaouira, Morocco, 2018
conference_website: http://netys.net/
pdf: stress-sgx.pdf
source: https://github.com/sebva/stress-sgx
date: 2018-05-09
---
The latest generation of Intel processors supports Software Guard Extensions (SGX), a set of instructions that implements a Trusted Execution Environment (TEE) right inside the CPU, by means of so-called enclaves.
This paper presents <span class="small-caps">Stress-SGX</span>, an easy-to-use stress-test tool to evaluate the performance of SGX-enabled nodes.
We build on top of the popular <span class="small-caps">stress-ng</span> tool, while only keeping the workload injectors (stressors) that are meaningful in the SGX context.
We report on several insights and lessons learned about porting legacy code to run inside an SGX enclave, as well as the limitations introduced by this process.
Finally, we use <span class="small-caps">Stress-SGX</span> to conduct a study comparing the performance of different SGX-enabled machines.
