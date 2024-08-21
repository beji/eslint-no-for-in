{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell { nativeBuildInputs = with pkgs; [ nodejs gnumake biome ]; }
