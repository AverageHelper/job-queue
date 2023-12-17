# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2023-12-16

### Added

- A proper CI/CD pipeline.
- `default.nix` file for consistent dev environment.

### Changed

- BREAKING: Ended support for Node 14.
- Used the MIT license instead of GPL, to permit use in closed-source projects. (It hurts my heart, but my boss might need this package someday, and they won't open-source their stuff.)
- Replaced our test harness with Vitest.

## [1.0.1] - 2021-12-02

### Added

- Initial release.

[2.0.0]: https://git.average.name/AverageHelper/job-queue/compare/v1.0.1...v2.0.0
[1.0.1]: https://git.average.name/AverageHelper/job-queue/releases/tag/v1.0.1
