import styled from 'styled-components';
import { breakPoints } from '@src/utils/breakpoints';
import React from 'react';
import { customColor } from '@constants/customColor';

// TestCase
// 1. width크기에 따라 레이아웃이 올바르게 변경되는지 확인

type Props = {
    children: React.ReactChild;
};

export const PageLayout = ({ children }: Props) => {
    return (
        <RootContainer>
            <Container>{children}</Container>
        </RootContainer>
    );
};

const RootContainer = styled.div`
    display: flex;
    background-color: #333;
    width: 100vw;
    min-height: 100vh;
`;

const Container = styled.div`
    background-color: ${customColor.white};
    display: flex;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    width: 390px;

    ${breakPoints.md} {
        width: 100vw;
        margin: 0px;
    }
`;
