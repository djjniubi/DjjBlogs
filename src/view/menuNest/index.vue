<!--
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-06-13 08:23:27
 * @LastEditTime: 2023-06-13 09:11:14
-->
<template>
    <router-view v-slot="{ Component, route }">
          <!-- <transition appear name="fade-transform" mode="out-in"> -->
              <keep-alive :include="'Homn'">
                  <component :is="Component" :key="route.path"></component>
              </keep-alive>
          <!-- </transition> -->
      </router-view>
  </template>