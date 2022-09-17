import { useCallback } from "src/treact/@hooks/useCallback";
import { useClickOutside } from "src/treact/@hooks/useClickOutside";
import { useEffect } from "src/treact/@hooks/useEffect";
import { useForm } from "src/treact/@hooks/useForm";
import { useMemo } from "src/treact/@hooks/useMemo";
import { useState } from "src/treact/@hooks/useState";
import { createStore } from "src/treact/@hooks/useStore";
import { useUpdate } from "src/treact/@hooks/useUpdate";
import { createElement, createFragmentElement, render } from "src/treact/core/jsx";

export const treact = {
	render,
	createElement,
	createFragmentElement,
	useState,
	useEffect,
	useMemo,
	useCallback,
	createStore,
	useForm,
	useUpdate,
	useClickOutside,
};


export type { Component, ModalComponent } from "src/treact/core/models";

