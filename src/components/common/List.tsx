import styled from "styled-components";


export type ListProps = {
    size: 'small' | 'meduim' |'large';
    onClick: () => void;
    direction: 'row' | 'column';
    list: string[]
}

export const Container = styled.div<{direction: string, size: string}>`
  display: flex;
  flex-direction: ${({direction}) => direction === 'row' ? 'row' : 'column'};
  gap: ${({size})=> size === 'small' ? '10px' : size === 'medium' ? '20px' : '30px'};
  
  > li {
    list-style: none;
    font-size: ${({size})=> size === 'small' ? '10px' : size === 'medium' ? '16px' : '28px'};
    padding: ${({size})=> size === 'small' ? '4px' : size === 'medium' ? '10px' : '20px'};
  }
`;

const List = (props:ListProps ) => {

    return (
        <Container direction={props.direction}
        size={props.size}>
            {props.list && props.list.map((el)=> {
                return (
                    <li key={el}
                        onClick={props.onClick}>{el}</li>
                )
            })}
        </Container>
    )
}

export default  List;