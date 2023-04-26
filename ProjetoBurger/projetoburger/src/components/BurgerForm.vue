<template>
    <div>
        <p>FORM</p>
        <div>
            <form  id="burger-form">
                <div class="input-container">
                    <label for="nome" >Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="pao" >Escolha seu pão:</label>
                    <select id="pao" name="pao" v-model="pao">
                        <option value="">Selecione o pão</option>
                        <option value="integral">Integral</option>
                        <option value="frances">Francês</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne" >Escolha carne:</label>
                    <select id="carne" name="carne" v-model="carne">
                        <option value="">Selecione carne</option>
                        <option value="maminha">maminha</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="opcionais" >Escolha carne:</label>
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="opcionais" value="salame" v-model="opcionais">
                        <span>salame</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Enviar " >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'BurgerForm'
    }
</script>

<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px ;
        border-left: 4px solid #FCBA03;
    }

    input, select {
        padding: 5px;
    }

</style>