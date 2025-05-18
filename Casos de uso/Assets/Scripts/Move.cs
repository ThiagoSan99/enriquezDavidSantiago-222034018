using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Move : MonoBehaviour
{
    private float speed = 10f;
    public bool cambiarObjeto = false;
    public float horizontalInput;
    public float verticalInput;
    public float fuerzaSalto = 10f;
    private bool enSuelo = true;
    private Rigidbody rb;
    public GameObject miObjeto;
    public GameObject miObjeto2;
    public bool tele = false;

    public TextMeshProUGUI coinText;
    public TextMeshProUGUI winText;
    public TextMeshProUGUI balaText;

    public bool ganaste = false;
    public bool puedeCambiar = false;
    public int coins = 0;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        balaText.text = $"Bala normal";
        UpdateUI();
    }

    // Update is called once per frame
    void Update()
    {

        

        horizontalInput = Input.GetAxis("Horizontal");
        verticalInput = Input.GetAxis("Vertical");
        transform.Translate(Vector3.right * Time.deltaTime * speed * horizontalInput);
        transform.Translate(Vector3.forward * Time.deltaTime * speed * verticalInput);

        if (Input.GetMouseButtonDown(0))
        {
            if(cambiarObjeto == false)
            {
                Instantiate(miObjeto, transform.position, Quaternion.identity);
                balaText.text = $"Bala normal";

            }
            else
            {
                Instantiate(miObjeto2, transform.position, Quaternion.identity);
                balaText.text = $"Bala doble";
            }

            


        }
        
        if (Input.GetKeyDown(KeyCode.Space) && enSuelo)
        {
            rb.AddForce(Vector3.up * fuerzaSalto, ForceMode.Impulse);
            enSuelo = false;
        }

        if (puedeCambiar && Input.GetKeyDown(KeyCode.Q))
        {
            cambiarObjeto = !cambiarObjeto;
        }

        if (ganaste == false)
        {
            if (transform.position.x > 25.74f)
            {
                transform.position = new Vector3(25.7f, transform.position.y, transform.position.z);
            }
            if (transform.position.x < -27.41879f)
            {
                transform.position = new Vector3(-27.4f, transform.position.y, transform.position.z);
            }
            if (transform.position.z < -56.82f)
            {
                transform.position = new Vector3(transform.position.x, transform.position.y, -56.8f);
            }
            if (transform.position.z > 53.82f)
            {
                transform.position = new Vector3(transform.position.x, transform.position.y, 53.8f);
            }
        }

        if (transform.position.y < -20.56f)
        {
            transform.position = new Vector3(0.04f, 9.51f, -52.32f);
        }
    }

    private void OnTriggerEnter(Collider Other)
    {
        if (Other.CompareTag("Moneda"))
        {
            Destroy(Other.gameObject);
            cambiarObjeto = true;
            coins += 1;
            UpdateUI();
            puedeCambiar = true;

            if (coins == 11)
            {
                tele = true;
            }
        }
        if (Other.CompareTag("Portal"))
        {
            if (tele == true) {
                float x = -669.3f;
                float y = 9.52f;
                float z = -165.26f;
                transform.position = new Vector3(x, y, z);
            }
        }
    }

  




    private void OnCollisionEnter(Collision collision)
    {
        
        if (collision.gameObject.CompareTag("Piso") || collision.gameObject.CompareTag("Muro") || collision.gameObject.CompareTag("Rampa"))
        {
            enSuelo = true;
        }
    }

    void UpdateUI()
    {
        coinText.text = $"Coins: {coins}";
        winText.text = $"En juego";

        if (coins == 11)
        {
            ganaste = true;
            winText.text = $"Ganaste";
        }
        
    }
}
