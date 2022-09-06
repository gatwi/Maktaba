import React from 'react'

export const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>KEEP SHOPPING</TopButton>
                <TopTexts>Your Wishlist (0)</TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
        </Wrapper>
    </Container>
  )
}

export default Cart;
