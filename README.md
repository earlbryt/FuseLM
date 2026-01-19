FuseLM is a custom implementation of a Diffusion Language Model.

It uses ideas from the following works:

- Large Language Diffusion Models (https://arxiv.org/abs/2502.09992)
- LLaDA 1.5: Variance-Reduced Preference Optimization for Large Language Diffusion Models (https://arxiv.org/abs/2505.19223)

The original model comes in an 8B variant, which is too large for me to train given my hardware constraints. Instead, this implementation uses a 1B variant, which is much smaller and can be trained on a single GPU. 

BERT-based encoders have similar masked language modelling capabilities to Diffusion Langauge Models, but are much smaller and faster to train. I'll be using a BERT-based model in this implementation.