# FDO ARCHITECTURE

This document present motivation behind technical choices.

# Project folders

- config
- core
  - errors
  - helpers
  - models
  - repository
  - resolver
  - service
- features
- features-referential

# Core

### Core->Resolver

- Why create and update operations are not generic ?

  > Since decorators are called at runtime, decorators such as the validation one or another type can't be executed.

  > Alias name id for \_id doesn't work as expected in input case scenario.

### Core->Service

### Core->Repository

### Core->Models
