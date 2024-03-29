# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2024-02-19
### Changed
- Changed type of exported `jobQueues` map to `ReadonlyMap`. This constraint is only enforced by TypeScript at build time, not run time, so please don't do anything silly with this.

## [2.1.0] - 2024-02-19
### Changed
- Removed `events` package dependency. Turns out that functionality is built into Node! No more runtime dependencies yay!!

### Fixed
- Fixed engine requirement range string.
- The ESM build now uses proper Private Fields, rather than TypeScript's legacy shim.

## [2.0.1] - 2023-12-16
### Fixed
- Reference the correct license in the README, lol

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

[3.0.0]: https://git.average.name/AverageHelper/job-queue/compare/v2.1.0...v3.0.0
[2.1.0]: https://git.average.name/AverageHelper/job-queue/compare/v2.0.1...v2.1.0
[2.0.1]: https://git.average.name/AverageHelper/job-queue/compare/v2.0.0...v2.0.1
[2.0.0]: https://git.average.name/AverageHelper/job-queue/compare/v1.0.1...v2.0.0
[1.0.1]: https://git.average.name/AverageHelper/job-queue/releases/tag/v1.0.1
