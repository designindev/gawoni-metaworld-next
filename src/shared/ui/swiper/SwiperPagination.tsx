'use client'

import { styled } from '@mui/material'

export const SwiperPagination = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  z-index: 5;

  .swiper-pagination-bullet {
    display: inline-flex;
    vertical-align: middle;
    opacity: 1;
    width: 20px;
    height: 20px;
    margin: 0 2px;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s, border 0.3s;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border: inherit;
      border-radius: inherit;
      transition: inherit;
    }

    :hover {
      &::before {
        background-color: #ff4501;
      }
    }

    &.swiper-pagination-bullet-active {
      &::before {
        background-color: #ff4501;
      }
    }
  }
`
