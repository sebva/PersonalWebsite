---
title: "IBBE-SGX: Cryptographic Group Access Control using Trusted Execution Environments"
authors: Stefan&nbsp;Contiu, Rafael&nbsp;Pires, Sébastien&nbsp;Vaucher, Marcelo&nbsp;Pasin, Pascal&nbsp;Felber, Laurent&nbsp;Réveillère
conference_short: DSN&nbsp;2018
conference_long: 48th IEEE/IFIP International Conference on Dependable Systems and Networks, Luxembourg City, 2018
conference_website: https://dsn2018.uni.lu/
pdf: ibbe-sgx.pdf
source: https://github.com/rafaelppires/trusted-sharing
date: 2018-06-25
---
While many cloud storage systems allow users to protect their data by making use of encryption, only few support collaborative editing on that data.
A major challenge for enabling such collaboration is the need to enforce cryptographic access control policies in a secure and efficient manner.
In this paper, we introduce IBBE-SGX, a new cryptographic access control extension that is efficient both in terms of computation and storage even when processing large and dynamic workloads of membership operations, while at the same time offering <em>zero knowledge</em> guarantees.

IBBE-SGX builds upon Identity-Based Broadcasting Encryption (IBBE).
We address IBBE's impracticality for cloud deployments by exploiting Intel Software Guard Extensions to derive cuts in the computational complexity.
Moreover, we propose a group partitioning mechanism such that the computational cost of membership update is bound to a fixed constant partition size rather than the size of the whole group.
We have implemented and evaluated our new access control extension.
Results highlight that IBBE-SGX performs membership changes 1.2 orders of magnitude faster than the traditional approach of Hybrid Encryption (HE), producing group metadata that are 6 orders of magnitude smaller than HE, while at the same time offering <em>zero knowledge</em> guarantees.
