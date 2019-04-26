"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerNativeModulePods;

var _readPodfile = _interopRequireDefault(require("./readPodfile"));

var _findPodTargetLine = _interopRequireDefault(require("./findPodTargetLine"));

var _findLineToAddPod = _interopRequireDefault(require("./findLineToAddPod"));

var _findMarkedLinesInPodfile = _interopRequireDefault(require("./findMarkedLinesInPodfile"));

var _addPodEntry = _interopRequireDefault(require("./addPodEntry"));

var _savePodFile = _interopRequireDefault(require("./savePodFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
function registerNativeModulePods(name, dependencyConfig, iOSProject) {
  const podLines = (0, _readPodfile.default)(iOSProject.podfile);
  const linesToAddEntry = getLinesToAddEntry(podLines, iOSProject);
  (0, _addPodEntry.default)(podLines, linesToAddEntry, dependencyConfig.podspec, name);
  (0, _savePodFile.default)(iOSProject.podfile, podLines);
}

function getLinesToAddEntry(podLines, {
  projectName
}) {
  const linesToAddPodWithMarker = (0, _findMarkedLinesInPodfile.default)(podLines);

  if (linesToAddPodWithMarker.length > 0) {
    return linesToAddPodWithMarker;
  }

  const firstTargetLined = (0, _findPodTargetLine.default)(podLines, projectName);
  return (0, _findLineToAddPod.default)(podLines, firstTargetLined);
}