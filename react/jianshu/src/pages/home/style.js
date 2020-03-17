import styled from 'styled-components'

export const HomeWrapper = styled.div`
   width: 960px;
   margin: 0 auto;
   overflow:hidden;
`;

export const HomeLeft = styled.div`
   margin-left:15px;
   padding-top:30px;
   width: 625px;
   float: left;
   .banner-img{
       width:625px;
       height:270px;
   }
`;

export const HomeRight = styled.div`
   width: 280px;
   float: right;
`;
export const TopicWrapper = styled.div`
   padding: 20px 0 10px 0;
   overflow: hidden;
   margin-left: -18px;
   border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float:left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius:4px;
  padding-right:10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .Topic_pic{
    width: 32px;
    height: 32px;
    display: block;
    float:left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100px;
    display:block;
    float: right;
    border-radius:10px;
  }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
      font-size:18px;
      line-height:27px;
      font-weight:bold;
      color: #333;
    }
    .desc{
      font-size:13px;
      line-height: 24px;
      color: #999;
    }
` ;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height:50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-top:8px;
`;
export const WriterWrapper = styled.div`
width:278px;
/* border:1px solid #dcdcdc; */
border-radius: 3px;
height: 300px;
line-height: 300px;
text-align:center;
`
export const WriterTitle = styled.div`
height:150px;

margin-top:100px;
  text-align: left;
  .title{
    font-size: 14px;
    color: #969696;
  }
  .pagechange{
    float: right;
    display: inline-block;
    font-size: 14px;
    /* margin-right:20px; */
    color: #969696;
  }
`
export const WriterList = styled.div`
    margin-top: 15px;
    /* display: list-item; */
    /* text-align: -webkit-match-parent; */
    box-sizing: border-box;
    line-height: 20px;
    /* overflow: hidden; */
    .pho{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    /* width: 100%;
    height: 100%; */
    border: 1px solid #ddd;
    border-radius: 50%;
    }
    .following{
      float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    }
    .name{
      padding-top: 5px;
      padding-left:10px;
    margin-right: 170px;
    font-size: 14px;
    display: block;
    /* cursor: pointer; */
    color: #333;
    }
    .src{
      margin-right: 70px;
      margin-top: 2px;
    font-size: 12px;
    color: #969696;
    }
`
export const WriterButton = styled.div`
    position: absolute;
    padding: 7px 7px 7px 12px;
    margin-top:10px;
    margin-left:1000px;
    left: 0;
    width: 160px;
    height:20px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    .find{
      margin-top:-140px;
      margin-left:50px;

      position:absolute;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height:40px;
    margin: 30px 0;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
`